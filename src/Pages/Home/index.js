import "./style.scss";
import HomeSection from "../../components/Headsection";
import Takeorder from "../../components/Takeorder";

function Home() {
 const bgcolorlist = ["#f9f6e7", "#e7f9e7" , "#f9eae7" , "#e7f9f9" , "#e9e7f9" , "#f7e7f9" , "#f9e7e8"];

 window.onload = function(){
  var arr = document.querySelector("body");
  for(var i=0;i<bgcolorlist.length;i++){
       arr.style.background = bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
  }
}

  return (
    <section>
      <HomeSection />
      <main>
        <Takeorder />
      </main>
    </section>
  );
}
export default Home;
