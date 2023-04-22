export const toKebabCase = (str) => {
    // Replace spaces with hyphens
    const kebabCaseStr = str.replace(/\s+/g, '-');

    // Convert to lowercase
    return kebabCaseStr.toLowerCase();
}