interface Data {
    [key: string]: any;
}

type Prediction = (data: Data) => boolean;

export declare interface CakebaseProvider {
    /**
     * Add an object to the json file.
     * @param data the object.
     */
    set(data: Data): Promise<void>;

    /**
     * Retrieve for objects in the json file
     * @param prediciton the prediction to find the objects.
     */
    get(prediciton: Prediction): Promise<Data[]>;

    /**
     * Remove objects in the json file
     * @param prediciton the prediction to find the objects
     */
    remove(prediciton: Prediction): Promise<void>;

    /**
     * Update objects in the json file
     * @param prediciton the prediction to find the objects
     * @param data Data you want to edit or add
     */
    update(prediciton: Prediction, data: Data): Promise<void>;

    /**
     * Delete all objects in the json file
     */
    clear(): Promise<void>;
}

/**
 * Cakebase is an asynchronous fast json database.
 * 
 * Initalize the json database.
 * @param root The json file path where our objects are stored.
 */
declare function CakebaseInstance(root: string): CakebaseProvider;

export default CakebaseInstance;