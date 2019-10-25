import React from 'react'
import CreateReviewFormContainer from '../products/reviews/create_review_form_container';
import EditReviewFormContainer from '../products/reviews/edit_review_form_container';
import { CartProceedToCheckout } from '../carts/show/cart_proceed_to_checkout';

export function Modal({modal, closeModal}) {
    if (!modal) {
        return null
    }

    let component;
    switch (modal) {
        case 'create review':
            component = <CreateReviewFormContainer />            
            break;
        case 'edit review':
            component = <EditReviewFormContainer />
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
