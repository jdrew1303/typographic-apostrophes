export default (input)=> {
  return input
        .replace(/ 'n' /gim, ' ’n’ ')
        .replace(/'n'/gim, '’n’')
        .replace(/(\S)'(\S)/gim, '$1’$2')
        .replace(/'(\d0s)/gim, '’$1');
}
