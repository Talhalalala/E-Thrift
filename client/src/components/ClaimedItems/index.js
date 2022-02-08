import React from 'react';
import CLaimedItemCard from '../ClaimedItemCard';

import './style.css';

const ClaimedItems = ({ claimedItems, isLoading }) => {

    const renderItems = claimedItems.map((item) => { 
        return (
            <CLaimedItemCard 
                id={item.id}
                seller={item.seller}
                name={item.name}
                price={item.price}
                category={item.category}
                description={item.description}
                image_url={item.image_url}
                image_id={item.image_id}
            />
        )
    });

    return (
        <>
            {isLoading &&
                <div className='loading-listings'>
                    ...loading
                </div>
            }
            {!isLoading && 
                <div className="claimed-items-container">
                    {renderItems}
                </div>
            }
        </>
    )
}

export default ClaimedItems;