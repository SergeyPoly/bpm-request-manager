export const typeConverter = (javaType) => {
    switch (javaType) {
        case 'string':
            return 'text';
        case 'long':
            return 'number';
        case 'file':
            return 'file';
        case 'boolean':
            return 'checkbox';
        case 'enum':
            return 'select';
        default:
            return '';
    }
};

export const typeReassigner = (javaType) => {
    if (javaType === 'long') {
        return 'double';
    }
    if (javaType === 'enum') {
        return 'string'
    }
    return javaType
};
