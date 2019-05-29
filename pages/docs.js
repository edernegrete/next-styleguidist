
const template = '<div id="rsg-root"></div><script src="/build/bundle.js"></script>'
const Docs = () => (
    <div dangerouslySetInnerHTML={{ __html: `${template}` }} />
)

export default Docs