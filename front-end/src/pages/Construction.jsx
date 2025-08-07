import { Helmet } from "react-helmet"

export default function Construction(){
    return(
        <>
        <Helmet>
        <title>Page en Construction</title>
        <meta name="description" content="Page en cours de création" />
         </Helmet>
        <div className="container">
            <div className="text-center">Pages en Construction</div>
        </div>
        </>
       
        
    )
}