export function navigate(route, params) {
  const origin = window.location.origin;
  const isGithub = origin.includes('github.io');
  const baseUrl = origin + isGithub ? '/puc-minas-diw-tp-3' : '';
  let result = `/pages/${route}/index.html`;
  Object.entries(params).forEach(([key, value], index) => {
    if (index === 0) {
      result += `?${key}=${value}`;
    } else {
      result += `&${key}=${value}`;
    }
  })

  window.location.href = baseUrl + result;
}