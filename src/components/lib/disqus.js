import React from 'react'

const D_Script = `
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

var disqus_config = function () {
  this.page.url = 'http://www.fpvbuildcalc.com';  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = 'fpvbuildcalc'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://fpv-build-calculator.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
`

class Disqus extends React.Component {
  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = D_Script;
    this.instance.appendChild(s);
  }

  render() {
    return (<div style={{padding:'2em'}}>
        <div ref={el => (this.instance = el)} />
        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export default Disqus
