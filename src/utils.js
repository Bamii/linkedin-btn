export function extractParams (params) {
  if(params[0] === '?') params = params.slice(1)

  return params
    .split('&')
    .reduce((acc, curr) => {
      const param = curr.split('=');
      return { [param[0]]: param[1], ...acc}
    }, {})
}