import React from 'react'
import CreateReviewContainer from '../products/reviews/create_review_form_container';
import EditReviewCOntainer from '../products/reviews/edit_review_form_container';
import { CartProceedToCheckout } from '../carts/show/cart_proceed_to_checkout';

export function Modal({modal, closeModal}) {
    if (!modal) {
        return null
    }

    let component;
    switch (modal) {
        case 'create review':
            component = <CreateReviewContainer />            
            break;
        case 'edit review':
            component = <EditReviewCOntainer />
            break;
        case 'proceed to checkout':
            component = <CartProceedToCheckout />
            break;
        default:
            return null;
    }
    
    return (
        <div>
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    { component }
                </div>
            </div>
        </div>
    )
}