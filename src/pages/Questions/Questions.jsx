import React from 'react';
import './Questions.scss';
import "./Questions.js"

const Questions = () => {
    return (
        <div className="wrapper">
          <section className="details-group">
            <details className="details" open>
              <summary className="details__summary">
                &lt;details&gt; and &lt;summary&gt;
              </summary>
              <div className="details__content">
                <p>The &lt;details&gt; and &lt;summary&gt; elements are used to allow common accordion-style functionality without relying on JavaScript.</p>
              </div>
            </details>
            <details className="details">
              <summary className="details__summary">Making it better</summary>
              <div className="details__content">
                <p>With a little help from JavaScript, we can supplement the default behavior to make an accordion that is super smooth and nicely-styled, but still degrades gracefully.</p>
                <p>This accordion uses JS to calculate heights so we can use CSS transitions without any max-height hacks. It also sets a timeout before removing the <code>open</code> attribute, so the content of the <code>&lt;details&gt;</code> element will stay visible until the height transition is finished.</p>
                <p>The cool part is that since we&rsquo;re using these modern HTML5 elements, the accordion should work just fine even with JavaScript disabled. <strong><em>Gasp!</em> A simple web component in 2018 that doesn&rsquo;t completely fail without JS?! Sound the alarm!</strong></p>
              </div>
            </details>
            <details className="details">
              <summary className="details__summary">Settings</summary>
              <div className="details__content">
                <ul>
                  <li>
                    <strong><code>speed</code></strong> <em>(default: <code>300</code>)</em> Speed of the transition in milliseconds. Setting this in the plugin will override the value specified in the CSS.
                  </li>
                  <li>
                    <strong><code>one_visible</code></strong> <em>(default: <code>false</code>)</em> Determines whether details can be toggled independently, or if only one can be visible at a time.
                  </li>
                </ul>
              </div>
            </details>

            <details className="details">
              <summary className="details__summary">Shameless Plug</summary>
              <div className="details__content">
                <p>If you liked this pen, check out <a target="_blank" href="https://keithpickering.github.io">my portfolio site</a>. I&rsquo;m accepting new projects all the time, so drop me a line.</p>
              </div>
            </details>
            <details className="details" open>
              <summary className="details__summary">
                &lt;details&gt; and &lt;summary&gt;
              </summary>
              <div className="details__content">
                <p>The &lt;details&gt; and &lt;summary&gt; elements are used to allow common accordion-style functionality without relying on JavaScript.</p>
              </div>
            </details>
            <details className="details" open>
              <summary className="details__summary">
                &lt;details&gt; and &lt;summary&gt;
              </summary>
              <div className="details__content">
                <p>The &lt;details&gt; and &lt;summary&gt; elements are used to allow common accordion-style functionality without relying on JavaScript.</p>
              </div>
            </details>
            <details className="details" open>
              <summary className="details__summary">
                &lt;details&gt; and &lt;summary&gt;
              </summary>
              <div className="details__content">
                <p>The &lt;details&gt; and &lt;summary&gt; elements are used to allow common accordion-style functionality without relying on JavaScript.</p>
              </div>
            </details>
            <details className="details" open>
              <summary className="details__summary">
                &lt;details&gt; and &lt;summary&gt;
              </summary>
              <div className="details__content">
                <p>The &lt;details&gt; and &lt;summary&gt; elements are used to allow common accordion-style functionality without relying on JavaScript.</p>
              </div>
            </details>
            <details className="details" open>
              <summary className="details__summary">
                &lt;details&gt; and &lt;summary&gt;
              </summary>
              <div className="details__content">
                <p>The &lt;details&gt; and &lt;summary&gt; elements are used to allow common accordion-style functionality without relying on JavaScript.</p>
              </div>
            </details>
            <details className="details" open>
              <summary className="details__summary">
                &lt;details&gt; and &lt;summary&gt;
              </summary>
              <div className="details__content">
                <p>The &lt;details&gt; and &lt;summary&gt; elements are used to allow common accordion-style functionality without relying on JavaScript.</p>
              </div>
            </details>
          </section>
        </div>
        
    );
};

export default  Questions;