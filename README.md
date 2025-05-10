### 概要
このプロジェクトは、Todoアプリの実装。

主な機能は以下の通りです：

- Todo入力欄が存在する。
- 追加ボタン押下時、入力したTodoが追加される。
- Todo登録時にチェックボックス、登録日、内容、削除ボタンが表示されている。
- 削除ボタン押下時、該当列が削除される（チェック有無に左右されない）。
- ヘッダー内にあるチェックボックスがtrueである場合、すべてのチェックボックスをtrueにする。
- チェックボタンがtrueの場合に一括削除ボタンを表示する。
- 一括削除ボタン押下時、チェックが入っている列が削除される。


### 使用技術一覧

- Docker 26.1.4
- Node.js 22.14.0
- npm 10.9.2
- TypeScript 5.8.3
- React 18.3.1
- Next.js 15.2.4
- ESLint 8.57.1

### 開発担当領域

- フロントエンド

### 環境構築方法

**ローカル環境**
---

`npm install`依存関係のインストール(初回のみ)

**Docker**
---

**1. devContainer使う場合**

VSCodeの「Dev Containers」機能を使う

  1. フォルダをvscode内で開いて

  2. `Ctrl + Shift + P` を押して、コマンドパレットを表示

  3. `Dev Containers: Open Folder in Container` を選択

**2. 手動でDockerを使う場合**

  1. イメージのビルド
  以下のコマンドを実行して、Dockerイメージを作成する：
  ```bash
  docker build -f Dockerfile -t react-todo-app .
  ```

  これで`react-todo-app`という名のimageが生成される

  2. コンテナを起動（初回のみ）
  以下のコマンドでコンテナを起動します：
  ```bash
  docker run -it \
    --entrypoint /bin/sh \
    -v ${PWD}:/workspace \
    -w /workspace \
    -p 3000:3000 \
    --name my-react-container \
    react-todo-app
  ```
  以下のように表示されれば起動成功です：
  ```bash
  /workspace # 
  ```

  3. コンテナからの退出

  `exit`でコンテナから抜けることができる
  
  4. 次回以降の起動

  2回目以降は`docker start -ai my-react-container`で簡単にコンテナ起動できる

### 開発環境内のコマンド
`npm run dev`開発サーバー立ち上がり

`npm run lint`コーディング規約チェック