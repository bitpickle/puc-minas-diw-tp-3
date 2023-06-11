export function navigate(route, params) {
  let result = `/pages/${route}/index.html`;
  Object.entries(params).forEach(([key, value]) => {
    result += `?${key}=${value}`;
  })

  window.location.href = result;
}