# How to use new full-stack

## 1. Clone the template repo `strada-template`

Clone the template repository in a folder where you want to create new full-stack project

```bash
git clone https://github.com/strada-api/strada-template.git <folder-name>
```

## 2. Change directory to the the folder and install dependencies

```bash
cd <folder-name>
```

### 2.1 Install node modules

```bash
rush update
```

### 2.2 Install `gitleaks`

`gitleaks` is a utility that scans git repository for secrets. We use `gitleaks` in a `pre-commit` hook to prevent committing any secret into the repository. You’ll need to install it if you need to make any commits!

```bash
brew install gitleaks
```

### 2.3 Install `infisical` and login

We are using [Infisical](https://infisical.com/) a secrets provider service. You’ll need to install `infisical-cli` to run project locally and access `dev` mode values for application’s secrets.

```bash
# Install cli
brew install infisical/get-cli/infisical

# Login
infisical login
```
<img width="410" alt="infis1" src="https://github.com/user-attachments/assets/9c6db595-3b6b-4e8d-9abf-fe71d5cfa841">

<img width="407" alt="infis2" src="https://github.com/user-attachments/assets/c01e518e-98b3-4e08-80d4-d136bf209f4c">

Enter domain for your self hosted Infisical service. 

Example: `https://strada-temp-1-service-3887-51be8161-ruo3m20i.onporter.run` 

<img width="571" alt="infis3" src="https://github.com/user-attachments/assets/cfbacaa8-f560-4c6c-a916-e820abe13979">

Complete login in browser popup

<img width="816" alt="infis4" src="https://github.com/user-attachments/assets/b6a10910-392a-4b27-92fe-740d3f8ab747">

### 3. Run the server

```bash
cd servers/express
rushx dev
```

Server start on [http://localhost:3005](http://localhost:3005/). Visit the URL in the browser you should see:

<img width="821" alt="server" src="https://github.com/user-attachments/assets/130cb7b8-3325-41ca-8cfc-829c4cc45c25">

### 4. Run DB migration

```jsx
cd databases/db
rushx migrate:dev
```
