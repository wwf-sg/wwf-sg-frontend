import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Button from "../../components/Ui/Button"

const DocButton = () => (
  <Layout>
    <Link style={{ textDecoration: "underline" }} to="/_docs/">
      Back to index
    </Link>

    <h1>Buttons</h1>
    <p>
      The button component is highly inspired by the bootstrap button component.
    </p>

    <div className="p-5 border-1">
      <p>
        Primary Button on White Background/Hero Image - Fontsize 18px, Min
        padding 20px.
      </p>
      <div>
        <a href="#sample-button" className="btn btn-outline-primary mr-2">
          Normal
        </a>
        <a
          href="#sample-button"
          className="btn btn-outline-primary active mr-2"
        >
          Press / Active / Hover
        </a>
        <a
          href="#sample-button"
          className="btn btn-outline-primary mr-2 disabled"
        >
          Disabled
        </a>
      </div>
      <pre className="mt-4">
        <code>
          <div>
            &lt;a href=&quot;#sample-button&quot; className=&quot;btn
            btn-outline-primary mr-2&quot;&gt; Normal &lt;/a&gt;
          </div>
          <div>
            &lt;a href=&quot;#sample-button&quot; className=&quot;btn
            btn-outline-primary mr-2 active&quot;&gt; Press / Active / Hover
            &lt;/a&gt;
          </div>
          &lt;a href=&quot;#sample-button&quot; className=&quot;btn
          btn-outline-primary mr-2 disabled&quot;&gt; Disabled &lt;/a&gt;
        </code>
      </pre>
    </div>

    <div className="bg-dark p-5 text-white mb-4">
      <p>
        Primary Button on Black Background/Hero Image - Fontsize 18px, Min
        padding 20px
      </p>
      <div>
        <a href="#sample-button" className="btn btn-outline-secondary mr-2">
          Normal
        </a>
        <a
          href="#sample-button"
          className="btn btn-outline-secondary mr-2 active"
        >
          Press / Active / Hover
        </a>
        <a
          href="#sample-button"
          className="btn btn-outline-secondary mr-2 disabled"
        >
          Disabled
        </a>
      </div>
      <pre className="mt-4 text-white">
        <code>
          <div>
            &lt;a href=&quot;#sample-button&quot; className=&quot;btn
            btn-outline-secondary mr-2&quot;&gt; Normal &lt;/a&gt;
          </div>
          <div>
            &lt;a href=&quot;#sample-button&quot; className=&quot;btn
            btn-outline-secondary mr-2 active&quot;&gt; Press / Active / Hover
            &lt;/a&gt;
          </div>
          &lt;a href=&quot;#sample-button&quot; className=&quot;btn
          btn-outline-secondary mr-2 disabled&quot;&gt; Disabled &lt;/a&gt;
        </code>
      </pre>
    </div>

    <h3 className="mt-5">Button sizes</h3>
    <p>
      Add <code>.btn-lg</code> or <code>.btn-sm </code> for additional sizes.
    </p>
    <div className="mb-4">
      <div>
        <a
          href="#sample-button"
          className="btn btn-outline-primary btn-sm mr-2"
        >
          Button small
        </a>
        <a href="#sample-button" className="btn btn-outline-primary mr-2">
          Button default
        </a>
        <a
          href="#sample-button"
          className="btn btn-outline-primary mr-2 btn-lg"
        >
          Button large
        </a>
      </div>
      <pre className="mt-4">
        <code>
          <div>
            &lt;a href=&quot;#sample-button&quot; className=&quot;btn
            btn-outline-primary mr-2 btn-sm&quot; &gt; Button small &lt;/a&gt;
          </div>
          <div>
            &lt;a href=&quot;#sample-button&quot; className=&quot;btn
            btn-outline-primary mr-2&quot;&gt; Button default &lt;/a&gt;
          </div>
          <div>
            &lt;a href=&quot;#sample-button&quot; className=&quot;btn
            btn-outline-primary mr-2 btn-lg&quot; &gt; Button large &lt;/a&gt;
          </div>
        </code>
      </pre>
    </div>

    <p>
      Create block level buttons—those that span the full width of a parent—by
      adding <code>.btn-block</code>.
    </p>
    <div className="">
      <div>
        <a
          href="#sample-button"
          className="btn btn-outline-primary btn-lg btn-block mr-2"
        >
          Button
        </a>
      </div>
    </div>

    <h3 className="mt-5">API</h3>

    <div className="overflow-auto mt-4 mb-5 border border-light">
      <table className="table table-bordered bg-white mb-0 table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="prop-table-row">
            <td className="text-monospace">disabled</td>
            <td className="text-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code className="PropTable-Code-module--cls1--2iQb5">false</code>
            </td>
            <td>
              <p>
                Disables the Button, preventing mouse events, even if the
                underlying component is an{" "}
                <code className="language-text">&lt;a&gt;</code> element
              </p>
            </td>
          </tr>

          <tr className="prop-table-row">
            <td className="text-monospace">block </td>
            <td className="text-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <p>Spans the full width of the Button parent</p>
            </td>
          </tr>
          <tr className="prop-table-row">
            <td className="text-monospace">href </td>
            <td className="text-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <p>
                Providing a <code className="language-text">href</code> will
                render an <code className="language-text">&lt;a&gt;</code>{" "}
                element, <em>styled</em> as a button.
              </p>
            </td>
          </tr>
          <tr className="prop-table-row">
            <td className="text-monospace">size </td>
            <td className="text-monospace">
              <div>
                <span>
                  <code>'sm'</code>
                  <span> | </span>
                  <code>'lg'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <p>Specifies a large or small button.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="code-demo">
      <div className="code-example">
        <Button>Primary</Button>
      </div>
      <pre>
        <code className="language-html">
          &lt;Button
          variant=&quot;outline-primary&quot;&gt;Primary&lt;/Button&gt;
        </code>
      </pre>
    </div>
  </Layout>
)

export default DocButton
