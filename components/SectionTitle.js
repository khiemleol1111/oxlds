
function SectionTitle({children, id}) {
    return(
        <>
            <h5 id={id} className="mt-10 mb-3">{children}</h5>
        </>
    )
}

export default SectionTitle