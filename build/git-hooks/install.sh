if [ -d .git/hooks ]; then
  ln -sf ../../build/git-hooks/pre-commit .git/hooks/pre-commit
  ln -sf ../../build/git-hooks/pre-push .git/hooks/pre-push
  ln -sf ../../build/git-hooks/commit-msg .git/hooks/commit-msg
  chmod +x .git/hooks/pre-commit
  chmod +x .git/hooks/pre-push
  chmod +x .git/hooks/commit-msg
fi
