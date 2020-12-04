import { Visitor, types as t } from "@babel/core"
import * as babelParser from "@babel/parser"
import babelTraverse from "@babel/traverse"
// @ts-ignore
import path from "path"
import fs from "fs"
import { exec } from "child_process"
import chalk from "chalk"

interface HintPos {
  row: number
  column: number
}

interface HintIdentifier extends HintPos {
  local: string
}

interface HintResolved extends HintPos {
  file: string
}

interface HintImport {
  source: HintIdentifier
  resolved?: HintResolved
  error?: string
}

interface HintDecl extends HintIdentifier {
  type: "type" | "value" | "class"
}

interface HintFile {
  imports: { [key: string]: HintImport }
  decls: HintDecl[]
}

function id2hint(id: t.Identifier): HintIdentifier {
  return {
    row: <number>id.loc?.start.line,
    column: <number>id.loc?.start.column + 1,
    local: id.name,
  }
}

function pluginFlow2Hint(rootDir: string, filename: string): Visitor<HintFile> {
  return {
    ImportDeclaration: {
      exit(path, state) {
        for (const specifier of path.node.specifiers) {
          let source: HintIdentifier | undefined
          switch (specifier.type) {
            case "ImportDefaultSpecifier": {
              source = id2hint(specifier.local)
              break
            }
            case "ImportNamespaceSpecifier": {
              source = id2hint(specifier.local)
              break
            }
            case "ImportSpecifier": {
              if (specifier.imported.type === "Identifier") {
                source = id2hint(specifier.imported)
              }
              break
            }
          }

          if (source) {
            state.imports[specifier.local.name] = { source }
          }
        }
      },
    },
  }
}

export async function convert({
  rootDir,
  filename,
  outFilename,
}: {
  rootDir: string
  filename: string
  outFilename: string
}): Promise<string> {
  const flowCode = fs.readFileSync(filename, { encoding: "utf8" })
  const flowAst = babelParser.parse(flowCode, {
    plugins: ["flow"],
    sourceType: "module",
    allowUndeclaredExports: true,
  })

  const hint: HintFile = { imports: {}, decls: [] }
  babelTraverse<HintFile>(flowAst, pluginFlow2Hint(rootDir, filename), undefined, hint)

  for (const key in hint.imports) {
    const hintImport = hint.imports[key]

    const relativePath = "." + filename.substr(rootDir.length)
    const execCommand = `flow get-def ${relativePath} ${hintImport.source?.row} ${hintImport.source?.column}`
    await new Promise<void>((resolve, reject) => {
      console.log(chalk.yellow(execCommand))
      resolve()
      /*exec(execCommand, { cwd: rootDir, encoding: "utf-8" }, (error, stdout, stderr) => {
        if (error) {
          hintImport.error = error.message
        } else if (stderr) {
          hintImport.error = stderr
        } else {
          hintImport.resolved = { row: 0, column: 0, file: stdout }
        }
        resolve()
      })*/
    })
  }

  const outData = JSON.stringify(hint, undefined, 4)

  await fs.promises.mkdir(path.dirname(outFilename), { recursive: true })
  await fs.promises.writeFile(outFilename, outData, "utf8")
  return outFilename
}