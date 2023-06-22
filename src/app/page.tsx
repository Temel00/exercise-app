import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="homeContent flex flex-row justify-center items-center text-center gap-3 text-slate-800">
        <div className="flex flex-col items-center gap-3 px-8">
          <h2>Get Training with</h2>
          <h1>Katie Peterson</h1>
          <h2>Personalized, Prescriptive Training</h2>  
          <h3>Discover the winning edge with Katie Peterson as your coach. Get ready to transform your athletic performance, break barriers, and exceed your goals. Start your journey today!</h3>
        </div>        
        <img src="../fitnessWoman2.png" alt="Woman smiling with weight" />        
      </div>
      <div className="flex flex-col w-full bg-slate-800 p-4 text-center text-amber-200">
        <h2>Secondary Content</h2>      
        <p>At Katie Peterson's Fitness Coaching, we believe in a holistic approach to training. It's not just about 
          pushing limits and building strength; it's about fostering mental resilience, improving technique, and optimizing 
          performance. Katie's personalized training programs are tailored to meet the unique needs and goals of each 
          individual athlete. Whether you're a seasoned professional or an aspiring athlete, Katie will help you rise above 
          challenges and reach new heights.</p>
      </div>
    </main>
  );
}
