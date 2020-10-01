const e = React.createElement;
class NavBar extends React.Component {
  render() {
    const names = ["Abby","Beau","Bianca","Cade","Ethan","Evan","Evanna","Grace","Kayla","Kung","Megan","Natalie","Tanner"];
    const links = names.map(item =>
      e("li",{className:"nav-item"},e("a",{className:"nav-link",href:"/"+item+"/"+item+".html"},item))
    );
    return e(
      'nav',
      {className:"navbar navbar-expand-sm bg-dark navbar-dark"},
      [e('a',{className:"navbar-brand",href:"/index.html"},"Happy Tree Friends Blog"),
       e('ul',{className:"navbar-nav"},
       links)]);
  }
}
ReactDOM.render(e(NavBar), document.getElementById('nav-place'));
