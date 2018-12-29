
def prettify(a):
    a = str.replace(a, ' ,', ',')
    a = str.replace(a, ' .', '.')
    a = str.replace(a, ' ;', ';')
    a = str.replace(a, ' :', ':')
    a = str.replace(a, ' \' ', '\'')
    a = str.replace(a, ' !', '!')
    a = str.replace(a, ' ?', '?')
    c = list(a)
    i = 0
    while i < len(c):
        if c[i - 2] == '.' or c[i - 2] == '?' or c[i - 2] == '!':
            c[i] = c[i].capitalize()
        i += 1

    if c[0] == ',' or c[0] == '.' or c[0] == '?' or c[0] == '!' or c[0] == ';' or c[0] == ':' or c[0] == '\'':
        del c[0]
        del c[0]

    if c[-1] == ',' or c[-1] == '.' or c[-1] == '?' or c[-1] == '!' or c[-1] == ';' or c[-1] == ':' or c[-1] == '\'':
        del c[-1]

    c[0] = c[0].capitalize()
    c.append('.')

    a = "".join(c)
    return a
