pipeline {
  agent any

  environment {
    NO_COLOR = 'true'
  }

  tools {
    nodejs 'NodeJS 16.17.0'
  }

  stages {
    stage('Checkout') {
      steps {
        echo 'Cloning GIT repository...'
        checkout scm
        echo 'GIT repository cloned.'
      }
    }
    stage('Install dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
        echo 'Dependencies installed.'
      }
    }
    stage('Run tests') {
      steps {
        echo 'Running tests...'
        sh 'npm test'
        echo 'Tests completed.'
      }
    }
    stage('Build') {
      steps {
        echo 'Building...'
        sh 'npm run build'
        echo 'Build completed.'
      }
    }
  }
}
