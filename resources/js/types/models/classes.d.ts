// Define the shape of a single class object
export type Class = {
    id: string | number; // Use 'string' or 'number' depending on your data
    name: string;
};

// Define the shape of the full props object
export type ClassesProps = {
    classes: {
        data: Class[]; // This is the correct way to define an array of `Class` objects
    };
};
