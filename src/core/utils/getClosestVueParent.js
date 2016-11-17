let getClosestVueParent = ($parent = {}, cssClass) => {
  if (!$parent.$el) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  if ($parent._uid === 0) {
    return false;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

export default getClosestVueParent;
