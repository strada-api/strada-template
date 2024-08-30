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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab6278d1-7a7a-4a39-b5bf-eb6974e328e0/640dd959-f156-42c1-9688-cdc55fbae110/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab6278d1-7a7a-4a39-b5bf-eb6974e328e0/aba70764-c482-453f-8df7-70410642eedd/Untitled.png)

Enter domain for your self hosted Infisical service. 

Example: `https://strada-temp-1-service-3887-51be8161-ruo3m20i.onporter.run` 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab6278d1-7a7a-4a39-b5bf-eb6974e328e0/932f999e-6e5d-475e-b7d9-0ffbcf86a047/Untitled.png)

Complete login in browser popup

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab6278d1-7a7a-4a39-b5bf-eb6974e328e0/3ea4e509-fd31-4e2f-918f-eb2cb32f789f/Untitled.png)

### 3. Run the server

```bash
cd servers/express
rushx dev
```

Server start on [http://localhost:3005](http://localhost:3005/). Visit the URL in the browser you should see:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ab6278d1-7a7a-4a39-b5bf-eb6974e328e0/603ff26c-a881-4dd0-8ecf-0b61ec3ce308/Untitled.png)

### 4. Run DB migration
