export const loadState = () =>
{

    let serializedState = localStorage.getItem('state');
    return serializedState ? JSON.parse(serializedState) : undefined;
}

export const saveState = (state) =>
{
    let serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}