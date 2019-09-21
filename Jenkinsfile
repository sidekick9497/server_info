pipeline {
  agent {
    node {
      label 'socs'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Deploy') {
      steps {
        sh '''npm run start
'''
      }
    }
  }
  environment {
    CI = 'true'
  }
}