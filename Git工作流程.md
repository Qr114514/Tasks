# Git工作流程
***
![alt Git工作流程](D:\VSCode\test\runoob\MyTasks\Git工作流程.jpg)
## 目录
[1.克隆仓库](#1-克隆仓库)  
[2.创建新分支](#2-创建新分支)  
[3.工作目录](#3-工作目录)  
[4.暂存文件](#4-暂存文件)  
[5.提交更改](#5-提交更改)  
[6.拉取最新更改](#6-拉取最新更改)  
[7.推送更改](#7-推送更改)  
[8.创建Pull Request(PR](#8-创建pull-requestpr)  
[9.合并更改](#9-合并更改)  
[10.删除分支](#10-删除分支)  

## 1. 克隆仓库  
   如果要参加一个已有的项目，首先需要将远程仓库克隆到本地。
   ``` bash
   git clone  
   https://github.com/username/repo.git
   cd repo
   ```
## 2. 创建新分支  
为了避免直接在main或master分支上进行开发，通常会创建一个新的分支：
    ```bash
    git checkout -b new-feature
    ```
## 3. 工作目录  
在工作目录中进行代码编辑、添加新文件或删除不需要的文件。 
## 4. 暂存文件  
   将修改过的文件添加到暂存区，以便进行下一步的提交操作：  
   ```bash
   git add filename
   # 或者添加所有修改的文件
   git add .
   ```
## 5. 提交更改
   将暂存区的更改提交到本地仓库，并添加提交信息：  
   ```bash
    git commit -m "Add new feature"
```

## 6. 拉取最新更改  
   在推送本地更改之前，最好从远程仓库拉去最新的更改，以避免冲突：
   ```bash
   git pull origin main
   # 或者如果在新的分支上工作
   git pull origin new-feature
   ```
## 7. 推送更改  
   将本地的提交推送到远程仓库：
   ```bash
   git push origin new-deature
   ```
## 8. 创建Pull Request(PR)
   在github或其他托管平台上创建Pull Request，邀请团队成员进行代码审查。PR合并后，更改就会合并到主分支。  
## 9. 合并更改  
    在PR审核通过并合并后，可以将远程仓库的主分支合并到本地分支：
    ```bash
    git checkout main
    git pull origin main
    git merge new-feature
    ```
## 10. 删除分支  
    如果不再需要新功能分支，可以将其删除：
    ```bash
    git branch -d new-feature
    ```


[def]: #2-创建新分支