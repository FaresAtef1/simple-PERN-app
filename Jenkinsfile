pipeline {  
     agent any  
     tools {nodejs "nodejs"}
     stages {  
         stage('build') {  
             steps {  
                sh 'echo "start build"'
                dir ('server') {
                    sh 'pwd'
                    sh 'npm install'
                    // sh 'npm start'
                    sh 'echo "finish"'
                }
             }  
         }  
     }  
     post {  
         always {  
             echo 'This will always run'  
         }  
         success {  
             echo 'This will run only if successful'  
         }  
         failure {  
             mail bcc: '', body: "<b>Failure</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br>", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "qwitterinc@gmail.com";  
         }  
         unstable {  
             echo 'This will run only if the run was marked as unstable'  
         }  
         changed {  
            script{
            // send only if previous build failed and current one succeeded
                if(currentBuild.result == 'SUCCESS' && currentBuild.getPreviousBuild().result == 'FAILURE') {
                    mail bcc: '', body: "<b>Back to work</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br>", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Successful CI: Project name -> ${env.JOB_NAME}", to: "qwitterinc@gmail.com";    
                }
            }  
         }  
     }
}