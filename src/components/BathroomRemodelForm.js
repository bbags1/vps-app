import React, { useState } from 'react';
import styles from './BathroomRemodelForm.module.css';

function BathroomRemodelForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6; // Define the total number of steps in the form

    const [formData, setFormData] = useState({
        sqft: '',
        layoutChange: false,
        remodelComponents: {
            vanity: false,
            toilet: false,
            shower: false,
            bathtub: false,
            flooring: false,
            lighting: false,
            outlets: false
        },
        showerType: '',
        showerDoor: '',
        showerDimensions: { length: '', width: '', height: '' },
        flooringType: '',
        lightingType: '',
        additionalOutlets: 0,
        style: '',
        showerFloorImage: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name in formData.remodelComponents) {
                setFormData(prev => ({
                    ...prev,
                    remodelComponents: {
                        ...prev.remodelComponents,
                        [name]: checked
                    }
                }));
            } else {
                setFormData(prev => ({ ...prev, [name]: checked }));
            }
        } else if (name === 'style') {
            const imageMap = {
                'Standard Curbed': 'https://www.redoshower.com/images/Blogs/Shower%20Curb/Pencil%20Trim%20White.jpg',
                'Curbless': 'https://sccpublic.s3-external-1.amazonaws.com/sys-master/images/hb8/hfe/9326512111646/schluter_showers_curbless_tssg_floral_1536.jpg'
            };
            setFormData(prev => ({
                ...prev,
                [name]: value,
                showerFloorImage: imageMap[value] || ''
            }));
        } else if (name === 'showerLength' || name === 'showerWidth' || name === 'showerHeight') {
            setFormData(prev => ({
                ...prev,
                showerDimensions: {
                    ...prev.showerDimensions,
                    [name]: value
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // For debugging
        fetch('http://localhost:5000/api/remodel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => alert('Form submitted successfully!'))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.formHeading}>Configure Your Bathroom Remodel</h2>
                {currentStep === 1 && (
                    <div>
                        <label className={styles.label}>Room Square Footage:</label>
                        <input className={styles.input} type="text" name="sqft" placeholder="Enter square footage" value={formData.sqft} onChange={handleChange} required />
                    </div>
                )}
                {currentStep === 2 && (
                    <div className={styles.checkboxContainer}>
                        <label className={styles.checkboxLabel} htmlFor="layoutChange">Check if layout change is required:</label>
                        <input type="checkbox" id="layoutChange" name="layoutChange" checked={formData.layoutChange} onChange={handleChange} className={styles.inputCheckbox} />
                    </div>
                )}
                {currentStep === 3 && (
                    <div>
                        <label className={styles.label}>Components to Remodel:</label>
                        {Object.keys(formData.remodelComponents).map(component => (
                            <div key={component} className={styles.checkboxContainer}>
                                <input type="checkbox" name={component} checked={formData.remodelComponents[component]} onChange={handleChange} />
                                <label className={styles.checkboxLabel}>{component.charAt(0).toUpperCase() + component.slice(1)}</label>
                            </div>
                        ))}
                    </div>
                )}
                {currentStep === 4 && (
                    <div>
                        <label className={styles.label}>Shower Type:</label>
                        <select className={styles.select} name="showerType" value={formData.showerType} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="fullTile">Full Tile</option>
                            <option value="tileFiberglassPan">Tile with Fiberglass Pan</option>
                            <option value="fullFiberglass">Full Fiberglass</option>
                        </select>
                    </div>
                )}
                {currentStep === 5 && (
                    <div>
                        <h3>Shower Dimensions:</h3>
                        <label className={styles.label}>Length (inches):</label>
                        <input className={styles.input} type="text" name="showerLength" placeholder="Enter length" value={formData.showerDimensions.length} onChange={handleChange} required />
                        <label className={styles.label}>Width (inches):</label>
                        <input className={styles.input} type="text" name="showerWidth" placeholder="Enter width" value={formData.showerDimensions.width} onChange={handleChange} required />
                        <label className={styles.label}>Height (inches):</label>
                        <input className={styles.input} type="text" name="showerHeight" placeholder="Enter height" value={formData.showerDimensions.height} onChange={handleChange} required />
                    </div>
                )}
                {currentStep === 6 && (
                  <>
                    <div>
                        <h3>Select Shower Door Type:</h3>
                        <div className={styles.showerDoorOptions}>
                            <div
                                className={`${styles.showerDoorOption} ${formData.showerDoor === 'swingingGlass' ? styles.selected : ''}`}
                                onClick={() => setFormData({...formData, showerDoor: 'swingingGlass'})}
                            >
                            <img src="https://images.thdstatic.com/productImages/9eff2040-334e-4b2c-b517-01eb5b8b6bf8/svn/dreamline-alcove-shower-doors-shdr-20607210s-06-64_600.jpg" alt="Swinging Glass Door" className={styles.showerDoorImage} />
                                <p>Swinging Glass Door</p>
                            </div>
                            <div
                                className={`${styles.showerDoorOption} ${formData.showerDoor === 'singlePanel' ? styles.selected : ''}`}
                                onClick={() => setFormData({...formData, showerDoor: 'singlePanel'})}
                            >
                                <img src="https://assets.wfcdn.com/im/43623823/compr-r85/2651/265161060/venus-34-in-x-8675-in-fully-frameless-arched-single-fixed-shower-panel.jpg" alt="Single Panel" className={styles.showerDoorImage} />
                                <p>Single Panel</p>
                            </div>
                            <div
                                className={`${styles.showerDoorOption} ${formData.showerDoor === 'fullFrameless' ? styles.selected : ''}`}
                                onClick={() => setFormData({...formData, showerDoor: 'fullFrameless'})}
                            >
                                <img src="https://www.alliedkitchenandbath.com/wp-content/uploads/2020/02/unnamedx500x500.jpg" alt="Full Frameless Surround" className={styles.showerDoorImage} />
                                <p>Full Frameless Surround</p>
                            </div>
                            <div
                                className={`${styles.showerDoorOption} ${formData.showerDoor === 'none' ? styles.selected : ''}`}
                                onClick={() => setFormData({...formData, showerDoor: 'none'})}
                            >
                                <p>None</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className={styles.label}>Flooring Type:</label>
                        <select className={styles.select} name="flooringType" value={formData.flooringType} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="tile">Tile</option>
                            <option value="vinyl">Vinyl</option>
                        </select>
                    </div>
                    <div>
                        <label className={styles.label}>Shower Floor Style:</label>
                        <select className={styles.select} name="style" value={formData.style} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Standard Curbed">Standard Curbed</option>
                            <option value="Curbless">Curbless</option>
                        </select>
                        {formData.showerFloorImage && (
                            <img src={formData.showerFloorImage} alt={formData.style} className={styles.showerStyleImage} />
                        )}
                    </div>
                    </>
                )}
                <div className={styles.navigationButtons}>
                    {currentStep > 1 && (
                        <button type="button" onClick={prevStep} className={styles.prevButton}>Previous</button>
                    )}
                    {currentStep < totalSteps && (
                        <button type="button" onClick={nextStep} className={styles.nextButton}>Next</button>
                    )}
                    {currentStep === totalSteps && (
                        <button type="submit" className={styles.submitButton}>Submit Remodel Plan</button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default BathroomRemodelForm;
