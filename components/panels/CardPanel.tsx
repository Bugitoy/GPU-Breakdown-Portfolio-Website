export default function CardPanel() {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 02 / 10 · The card</p>
          <div className="bar" />
          <h2 className="ttl">Spec sheet</h2>
          <p className="sub">Every card ships with one. Here's what's on mine.</p>
          <dl className="spec">
            <dt>Programming languages</dt>
            <dd>C · C++ · CUDA · Python · Rust · C# · JavaScript · TypeScript</dd>
            <dt>GPU &amp; graphics</dt>
            <dd>CUDA · Vulkan · SIMD · multithreading</dd>
            <dt>Machine learning</dt>
            <dd>PyTorch · transformers</dd>
            <dt>Hardware design</dt>
            <dd>Verilog · SystemVerilog · VHDL</dd>
            <dt>Web &amp; mobile</dt>
            <dd>Next.js · React · React Native · Node.js · Tailwind</dd>
            <dt>Databases</dt>
            <dd>MongoDB · Redis · SQL · Prisma</dd>
            <dt>Cloud &amp; tooling</dt>
            <dd>Docker · AWS · CI/CD · Linux · WebRTC · Socket.io</dd>
            <dt>Spoken languages</dt>
            <dd>English (native) · Setswana (full professional) · French (professional working)</dd>
          </dl>
        </div>
      </>
  );
}
