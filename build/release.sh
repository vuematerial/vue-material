# Based on Vue.js Release file
# https://github.com/vuejs/vue/blob/dev/build/release.sh

set -e

function get_package_version {
  echo $(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g')
}

# init the process
if [[ -z $1 ]]; then
  echo "Enter new version: "
  read VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # check errors
  npm run lint

  # generate old docs tree
  PACKAGE_VERSION=$(get_package_version)
  cp -Rf dist/docs/releases tmp-releases
  cp -Rf dist/docs tmp-releases/v$PACKAGE_VERSION
  rm -Rf tmp-releases/v$PACKAGE_VERSION/releases

  # append version
  sed -i '' -e "s|\"]|\", \"$VERSION\"]|g" docs/versions.json

  # build
  VERSION=$VERSION npm run build
  cp -Rf tmp-releases dist/docs/releases
  rm -Rf tmp-releases

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push origin refs/tags/v$VERSION
  git push

  # deploy
  if [ "`git remote| grep site`" == "site" ] ; then
    git remote remove site
  fi

#  git remote add site https://github.com/vuematerial/vuematerial.github.io.git
  git remote add site git@github.com:vuematerial/vuematerial.github.io.git
  git push site `git subtree split --prefix dist/docs master`:master --force --progress

  npm publish
fi
