export const db = "hello"

var count = 0

export function db_get_count() {
    return count
}

export function db_increase_count() {
    return ++count
}

export function db_decrease_count() {
    return --count
}