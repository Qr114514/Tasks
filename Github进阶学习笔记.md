# Github协同开发
## 目录
+ [两种主要协作模式](#两种主要协作模式)  
+ [Fork和Pull Request（PR）的流程](#fork和pull-requestpr的流程)  
  1. [Fork仓库](#1-fork仓库)
  2. [克隆你的Fork仓库到本地](#2-克隆你的fork仓库到本地)
  3. [添加原仓库为上有远程upstream](#3-添加原仓库为上游远程upstream)  
  4. [创建新分支进行开发](#4-创建新分支进行开发)  
  5. [开发与提交](#5-开发与提交)  
  6. [保持分支与上游同步](#6-保持分支与上游同步)  
  7. [推送代码到你的Fork仓库](#7-推送代码到你的fork仓库)  
  8. [发起Pull Request(PR)](#8-发起pull-requestpr)  
  9. [处理反馈与冲突](#9-处理反馈与冲突)  
  10. [PR合并后的清理](#10-pr合并后的清理)  
+ [最佳实践与注意事项](#最佳实践与注意事项)

## 两种主要协作模式
1. **共享仓库模式**
- 特点：所有协作者拥有直接推送权限
- 适用场景：小型团队/私有项目
- 权限管理：通过仓库设置控制

2. **Fork & Pull 模式**
- 特点：开发者独立维护自己的仓库副本
- 适用场景：开源项目/大型协作
- 流程：
```mermaid
    graph LR
    A[主仓库] --> B(Fork)
    B --> C[个人仓库]
    C --> D[本地开发]
    D --> E(Pull Request)
    E --> A
```

---
## Fork和Pull Request（PR）的流程
### 1. Fork仓库
+ 目的：将原项目复制到你的GitHub账户，作为独立副本。

+ 操作：

   1. 进入原项目页面（如https://github.com/user/repo）。  
   1. 点击右上角 Fork 按钮，选择你的账户作为目标位置。
   
### 2. 克隆你的Fork仓库到本地
```bash
git clone https://github.com/你的用户名/repo.git
cd repo
```

### 3. 添加原仓库为上游远程（Upstream）
+ 目的：同步原仓库的最新代码。
``` bash
git remote add upstream https://github.com/原所有者/repo.git
```
+ 检查远程配置：
``` bash
git remote -v
# 应显示 origin（你的Fork）和 upstream（原仓库）
```

### 4. 创建新分支进行开发  
+ 最佳实践：为每个功能/修复创建独立分支。
``` bash
git checkout -b feature-branch
```

### 5. 开发与提交  
+ 修改代码后提交：
``` bash
git add .
git commit -m "描述清晰的提交信息"
```  
### 6. 保持分支与上游同步
+ 定期拉取原仓库更新，避免冲突：
```bash
git fetch upstream          # 获取上游最新代码
git merge upstream/main     # 合并到当前分支（或使用 git rebase）
``` 
+ 若使用 rebase（适用于整理提交历史）：
``` bash
git rebase upstream/main
```

### 7. 推送代码到你的Fork仓库
``` bash
git push origin feature-branch
```
### 8. 发起Pull Request（PR）
1. 进入你的Fork仓库页面（GitHub）。

2. 点击 Compare & pull request（通常在推送新分支后自动提示）。

3. 选择正确的 base repository（原仓库）和 base branch（如 main）。

4. 填写PR描述，说明修改内容、关联的Issue等。

5. 提交PR，等待维护者审核。
### 9. 处理反馈与冲突
情况1：维护者要求修改代码  
   + 在本地分支修改后，提交并推送： 
``` bash
git commit -am "修复问题..."  
git push origin feature-branch  
```  
+ PR会自动更新，无需重新提交。 
  
情况2：存在代码冲突  
1. 拉取上游最新代码并合并：
```bash
git fetch upstream
git rebase upstream/main   # 或 git merge upstream/main  
```
2. 手动解决冲突，继续变基/合并：  
```bash
git add .
git rebase --continue      # 或直接提交（若用 merge）
```
3. 强制推送更新（若已推送过）：  
```bash  
git push -f origin feature-branch  
```  
### 10. PR合并后的清理
+ 删除远程分支（GitHub会在合并时提示选项）。

+ 更新本地仓库：  
```bash
git checkout main
git pull upstream main      # 同步原仓库
git push origin main        # 更新你的Fork
git branch -D feature-branch # 删除本地分支
```
### 最佳实践与注意事项
1. 分支管理：每个功能/修复用独立分支，避免污染 main 分支。

2. 提交规范：使用清晰的前缀（如 feat:, fix:, docs:），遵循Conventional Commits。

3. 代码审查：在PR中详细描述修改，关联Issue，主动请求Review。

4. 同步频率：开发前和提交PR前，确保分支基于最新代码。

5. 避免强制推送：若分支已共享，慎用 `git push -f`。

[def]: #1-fork仓库