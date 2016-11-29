# Based on Vue.js Release file
# https://github.com/vuejs/vue/blob/dev/build/release.sh

set -e

# get latest version of package json
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

  # generate docs tree
  PACKAGE_VERSION=$(get_package_version)
  cp -Rf dist/docs tmp-docs

  # append version
  sed -i '' -e "s|\"]|\", \"$VERSION\"]|g" versions.json

  # build
  VERSION=$VERSION npm run build
  cp -Rf tmp-docs dist/docs/v$PACKAGE_VERSION
  rm -Rf tmp-docs

  # commit
  #### git add -A
  #### git commit -m "[build] $VERSION"
  #### npm version $VERSION --message "[release] $VERSION"

  # publish
  #### git push origin refs/tags/v$VERSION
  #### git push
  #### npm run deploy-docs
  #### npm publish
fi
