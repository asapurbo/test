const Heading = ({ as: Head = 'div', className, text }) => {
    const pattern = /#([^#]+)#/g;
    const parts = text.split(pattern).map((part, index) => {
        if (index % 2 === 1) {
            return <span className="heading" key={index}>{part}</span>;
        }
        return part;
    });
  
    return <Head className={className}>{parts}</Head>;
};

export default Heading;