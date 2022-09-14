import React from 'react';


function ReviewForm(props){
    return (
    
<div className="wrapper">
    <form onSubmit={props.handleSubmit}>
        <div>Have an experience with [Restaurant Name]? Share your review</div>
        <div className="field">
            <input onChange={props.handleChange} value={ReviewForm.title} type="text" name="title"placeholder='Review Title'/>
            </div>
            <div className="field">
                <input onChange={props.handleChange} value={ReviewForm.description} type="text" name="description" placeholder='Review Description'/>
                </div>
                <div className="field">
                    <div className='rating-container'>
                        <div className="rating-title-text">Rate This Restaurant</div>[Star Rating Goes here]
                    </div> 
            </div>
            <button type="submit">Submit Your Review</button>
    </form>
    </div>
)
    
}


export default ReviewForm;


