Pasos:

- .gitignore : https://gitignore.io/ | windows | mac | linux | node
- .editorconfig :
  - root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

- npm init -y
- npm install typescript -D | npm i -D typescript
- npm tsc --init :
  -{
  "compilerOptions": {
  "target": "es6",
  "module": "commonjs",
  "outDir": "./dist",
  "strict": true,
  "esModuleInterop": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true
  }
  }
- npx tsc --watch
