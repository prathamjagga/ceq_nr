terraform {
  required_providers {
    newrelic = {
      source = "newrelic/newrelic"
      version = "3.26.0"
    }
  }
}

 

provider "newrelic" {
  account_id = 4055887
  api_key = "NRAK-RQM36F2WAB1MUU8XFJ920KFKFIK"  # Usually prefixed with 'NRAK'
  region = "US"  
}