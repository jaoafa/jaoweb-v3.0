# 開発環境構築

- `Node.JS` をインストールする（とりあえず最新のやつ）
  - [【Windows10】nodistでnodeをインストール - Qiita](https://qiita.com/nt_tn/items/f3193cde496399b41e51)
- `Yarn` をインストールする
  - 依存関係とかめんどいし、ねこがかわいいので `Yarn` を使う。
  - [Yarn を導入しよう（Windows） - Qiita](https://qiita.com/kurararara/items/21c70c4adfd3bb323412)
- `Git` を利用できるようにする
  - GUIのほうがわかりやすいのでSourceTreeを入れる
  - 動かしたいだけなら必要ないけどコミットとかしたいならGitHubにも登録して設定したほうがよい。
  - [SourceTree(3.0.15)をインストールしてみた - Qiita](https://qiita.com/tetsu831018/items/bb6ecf15ca5f67e5879a)
  - [SourceTreeとGithubでGitの練習環境をつくる - Qiita](https://qiita.com/naoki85/items/4f44601f1365c18035f4)
- `clone` して `yarn install` 実行
  - GitHubにあるこのリポジトリをとってきて `yarn install` を実行する。実行すると必要なパッケージがダウンロードされる。
  - `yarn build` でSassのコンパイルとかファイルの監視とかが実行される。終了する場合は `Ctrl+C` 。
    - `npx gulp build` とか `npm run build` でも可。たぶん。


# ディレクトリ構成

- dist
  - コンパイルした後のファイル。 `yarn build` 実行中であれば自動で生成される。
- src
  - ソースファイル置き場。このディレクトリの中身をコンパイルしたり結合したりしたものが `build` に出力される。
  - `src/html/pages/` に `.ejs` ファイルを作成すると、 `dist/` に `.html` ファイルが作られる。
    - アンダースコアからはじまるファイル名で作成すると `dist/` に作られない。
  - ファイルの変更を検知してコンパイル等が行われるので、 `yarn build` 実行前にファイルを変更してもビルドされない。実行中にファイルを保存する必要がある。
- docs
  - メモ書きとか色々置く場所。
  - `.md` ファイルで書こう。
