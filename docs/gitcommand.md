# 文件修改状况
git diff  filename // 工作区与暂存区的比较
git diff --cached filename // 暂存区与版本库的比较
git diff HEAD -- filename // 工作区与版本库中的区别

# 版本回退
git log   // 查看提交历史
git reflog // 查看命令历史

git reset --hard 分支前几个字符或HEAD^^^ // 返回到某个commit

# 撤销修改
git checkout -- filename // 丢弃工作区的修改，未add未commit
// 仅add未commit
- git reset HEAD filename // 先丢弃暂存区的修改，重新放回工作区
- git checkout -- filename // 同上
// add 且 commit 版本回退

# 分支管理
git checkout -b branchname // 创建并切换分支
// 等价于
git branch branchname  // 创建分支
git checkout branchname  // 切换分支

git branch  // 查看分支
git branch -d branchname // 删除分支

git merge antherbranchname // 将另一分支的工作合并到当前分支

# 
























