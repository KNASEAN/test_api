# [git commit error](https://zenn.dev/ikkik/articles/475924c5c97718)
原因
git設定にuser.nameとuser.emailが存在しない。

```
ユーザ名の設定
git config user.name [ユーザ名]

 メールアドレスの設定
git config user.email [メールアドレス]
```

KNASEAN

# [how to post to gas webapp](https://qiita.com/khidaka/items/ebf770591100b1eb0eff)

```
"Content-Type" : "application/x-www-form-urlencoded",
"mode"       : "no-cors",
```

# [how to deploy Firebase by Github](https://note.com/build_service/n/nd4756ceb103f)

## 安全にデプロイするための権限設定
Firebase CLI を開発者が Local PC で使う場合には通常 `firebase login` というコマンドを叩いて、開発者の Google アカウントで認証するやり方が一般的かと思います。
これを行うことで、開発者に割り当てられている権限がデプロイ時に評価され、デプロイ対象のプロダクトに対する権限を開発者が持っている場合は正常にデプロイを行うことができます。

##  GCP サービスアカウント
前項で出てきたトークンによる認証は、Google アカウントでないと利用できないため GCP のサービスアカウント を使った方法で権限の割当を行います。詳細は下記のドキュメントを参照していただければと思いますが、簡単に説明すると、Google アカウントとしてログインはできませんが、Google アカウントのユーザーと同様に権限を割り当てることのできるリソースで、GCP リソースの操作に使用することのできる特別なアカウントです。

```
gcloud projects add-iam-policy-binding <PROJECT_ID> \
  --member=serviceAccount:<SERVICE_ACCOUNT> \
  --role=roles/firebase.developAdmin \
  --project=<PROJECT_ID>

gcloud projects add-iam-policy-binding <PROJECT_ID> \
  --member=serviceAccount:<SERVICE_ACCOUNT> \
  --role=roles/cloudfunctions.admin \
  --project=<PROJECT_ID>

gcloud projects add-iam-policy-binding <PROJECT_ID> \
  --member=serviceAccount:<SERVICE_ACCOUNT> \
  --role=roles/cloudscheduler.admin \
  --project=<PROJECT_ID>

gcloud projects add-iam-policy-binding <PROJECT_ID> \
  --member=serviceAccount:<SERVICE_ACCOUNT> \
  --role=roles/iam.serviceAccountUser \
  --project=<PROJECT_ID>
```

##  GitHub Actions サービスアカウントを使う

1. サービスアカウントの JSON ファイルを Base64 エンコードする

2. Base64 したサービスアカウントの JSON キーを GitHub のコンソールから Actions の Secret として登録

3. GitHub Actions の定義ファイル (.github/workflows/ ディレクトリに作成する yml ファイル) 内でスクリプトにてサービスアカウントの JSON ファイルを復元し、環境変数に設定する

# [how to deploy Firebase by Github2](https://zenn.dev/kazhack/articles/21ea0ba46f3fce)
> npm install firebase

> [create project on firebase](https://firebase.google.com/?hl=ja)

> firebase login

> firebase init

２つあるHostingの違いは以下の通りです。  
Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
訳：Firebase Hostingのファイル構成するし、ついでにGitHub Actionのデプロイも設定しとくで

Hosting: Set up GitHub Action deploys
訳：GitHubActionsのデプロイ設定しかせぇへんよ

What do you want to use as your public directory?(public)
訳：パブリックディレクトリとして何使う？

デフォルトではpublicフォルダを選択しようとするのですが、Reactなどの事前にビルドが必要なアプリではbuildフォルダに設定しておかないと画面が真っ白になります。
必ずbuildを入力してEnterを押してください。

Created service account github-action-********* with Firebase Hosting admin permissions.
Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_FIR_HOSTING_DEPLOY.
You can manage your secrets at https://github.com/*****/firebase-hosting-deploy/settings/secrets.
