# Git版本回滚与冲突解决
## 版本回滚


Git 提供了多种方式来恢复和回退到之前的版本，不同的命令适用于不同的场景和需求。

以下是几种常见的方法：

- **`git checkout`**：切换分支或恢复文件到指定提交。
- **`git reset`**：重置当前分支到指定提交（软重置、混合重置、硬重置）。
- **`git revert`**：创建一个新的提交以撤销指定提交，不改变提交历史。
- **`git reflog`**：查看历史操作记录，找回丢失的提交。

### 1、git checkout：检查出特定版本的文件

git checkout 命令用于切换分支或恢复工作目录中的文件到指定的提交。

恢复工作目录中的文件到某个提交：
```bash
git checkout <commit> -- <filename>
```

例如，将 file.txt 恢复到 abc123 提交时的版本：

```bash
git checkout abc123 -- file.txt
```

切换到特定提交：

```bash
git checkout <commit>
```

例如：

```bash
git checkout abc123
```

这种方式切换到特定的提交时，处于分离头指针（detached HEAD）状态。

### 2、git reset：重置当前分支到特定提交

git reset 命令可以更改当前分支的提交历史，它有三种主要模式：--soft、--mixed 和 --hard。

**选项对比**：

|参数|影响范围|适用场景|
|---|---|---|
|`--soft`|仅移动HEAD指针，保留修改到暂存区|重新组织提交|
|`--mixed`|移动HEAD指针，保留修改到工作区|默认选项，部分修改需重提交|
|`--hard`|彻底丢弃所有修改|完全放弃当前改动|

--soft：只重置 HEAD 到指定的提交，暂存区和工作目录保持不变。

```bash
git reset --soft <commit>
```

--mixed（默认）：重置 HEAD 到指定的提交，暂存区重置，但工作目录保持不变。

```bash
git reset --mixed <commit>
```

--hard：重置 HEAD 到指定的提交，暂存区和工作目录都重置。

```bash
git reset --hard <commit>
```

例如，将当前分支重置到 abc123 提交：

```bash
git reset --hard abc123
```

### 3、git revert：撤销某次提交

git revert 命令创建一个新的提交，用来撤销指定的提交，它不会改变提交历史，适用于已经推送到远程仓库的提交。

```bash
git revert <commit>
```

例如，撤销 abc123 提交：

```bash
git revert abc123
```

### 4、git reflog：查看历史操作记录

git reflog 命令记录了所有 HEAD 的移动。即使提交被删除或重置，也可以通过 reflog 找回。

git reflog

利用 reflog 可以找到之前的提交哈希，从而恢复到特定状态。例如：

```bash
git reset --hard HEAD@{3}
```

## 冲突解决
***
### 1. 冲突产生场景

- `git merge` 合并分支

- `git pull` 拉取远程更新

- `git rebase` 变基操作

- `git cherry-pick` 选择性应用提交


### 2. 手动解决冲突步骤

1. **定位冲突文件**

    ```bash
    git status # 查看冲突文件列表
    ```

2. **编辑冲突文件**
    > 冲突标记示例

    ```text
    <<<<<<< HEAD
    本地修改内容
    =======
    远程/其他分支内容
    >>>>>>> commit-hash
    ```
3. **选择保留内容**

- 删除冲突标记（`<<<<<<<`, `=======`, `>>>>>>>`）

- 保留需要的内容或合并两者

4. **标记冲突已解决**

    ```bash
    git add <file-path> # 添加解决后的文件
    ```

5. **完成合并/变基**

    ```bash
    git commit -m "fix: resolve conflicts" # 合并操作
    git rebase --continue # 变基操作
    ```