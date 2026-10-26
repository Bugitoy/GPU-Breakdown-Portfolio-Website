export default function SMPanel() {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 07 / 10 · One SM</p>
          <div className="bar" />
          <h2 className="ttl">Machine learning Projects</h2>
          <p className="sub">From tensors to transformers</p>
          <div className="item">
            <div className="ih">
              <h3>PyTorch Tutorial</h3>
              <span className="when">Nov 2025</span>
            </div>
            <p className="org">Written guide · how PyTorch works</p>
            <ul className="bul">
              <li>A walkthrough of PyTorch fundamentals, from tensors up to the pieces used to build language models.</li>
            </ul>
            <a className="lnk" href="https://github.com/Bugitoy/Pytorch-Tutorial" target="_blank" rel="noopener">Read it ↗</a>
          </div>
          <div className="item">
            <div className="ih">
              <h3>Character-Level Bigram Model</h3>
              <span className="when">Oct 2025</span>
            </div>
            <p className="org">PyTorch · first language model</p>
            <ul className="bul">
              <li>Learns next-character probabilities from a text corpus with a single embedding lookup, trained with cross-entropy and sampled autoregressively.</li>
            </ul>
            <a className="lnk" href="https://github.com/Bugitoy/Character-Level-Bigram-Model" target="_blank" rel="noopener">View code ↗</a>
          </div>
          <div className="item">
            <div className="ih">
              <h3>GPT-Style Transformer</h3>
              <span className="when">Sep – Nov 2025</span>
            </div>
            <p className="org">PyTorch · from scratch</p>
            <ul className="bul">
              <li>Character-level language model inspired by OpenAI's GPT architecture: multi-head self-attention, positional embeddings and feed-forward blocks.</li>
              <li>384-dim embeddings, 6 attention heads, 6 layers, trained on Tiny Shakespeare with AdamW to a 1.7 cross-entropy loss.</li>
            </ul>
            <a className="lnk" href="https://github.com/Bugitoy/GPT-style-Transformer" target="_blank" rel="noopener">View code ↗</a>
          </div>
        </div>
      </>
  );
}
