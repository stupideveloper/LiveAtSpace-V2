import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  componentDidMount() {
    console.log("Using custom document")
  }
  render() {
    return (
      <Html>
        <Head>
        <div id="532316696" dangerouslySetInnerHTML={mediaNetHeadTag()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
function mediaNetHeadTag() {
    
    return{__html: '<script type="text/javascript">try {window._mNHandle.queue.push(function (){window._mNDetails.loadTag("532316696", "300x250", "532316696");});}catch (error) {}</script>'}
  }
export default MyDocument
