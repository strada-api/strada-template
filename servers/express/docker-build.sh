#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0 --image_name IMAGE_NAME --inf_client_id INFISICAL_MACHINE_ID --inf_client_secret INFISICAL_MACHINE_SECRET"
    exit 1
}

# Parse named arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --image_name) image_name="$2"; shift ;;
        --inf_client_id) inf_client_id="$2"; shift ;;
        --inf_client_secret) inf_client_secret="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; usage ;;
    esac
    shift
done

if [ -z "$image_name" ]; then
    image_name="express-service"
fi


# Check if all required arguments are provided
if [ -z "$inf_client_id" ] || [ -z "$inf_client_secret" ]; then
    echo "Error: Missing required arguments."
    usage
fi

# Infisical machine login
infisical_token="$(infisical login --method=universal-auth --client-id=$inf_client_id --client-secret=$inf_client_secret --domain https://strada-temp-1-service-3887-51be8161-ruo3m20i.onporter.run/api --plain --silent)"
echo "infisical_token: $infisical_token"
docker build --build-arg infisical_token=$infisical_token -t $image_name .
