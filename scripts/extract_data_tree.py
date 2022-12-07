

from bs4 import BeautifulSoup


class DataTree:
    lable: str
    nodes = []


class HTMLNode:
    nodeid: int
    parentid: int
    label: str


def get_label(soup):
    if soup == '\n':
        return "err"
    return soup.a.text


def get_nodeid(soup):
    if soup["nodeid"] is None:
        return -1
    return soup["nodeid"]


def get_parentid(soup):
    if soup["parentnodeid"] is None:
        return 0
    return int(soup["parentnodeid"])


def main():
    with open("/home/cirno/source/repos/nav-tree/scripts/data.html", "r") as f:
        html = f.read()

    html = html.strip('\t\r\n')

    soup = BeautifulSoup(html, "html.parser")

    root = DataTree()

    root = dfs(soup)

    print(root)


def dfs(soup):
    if soup.ul is None:
        return None
    nodes = []
    for child in soup.ul.contents:
        if child == '\n':
            continue
        node = DataTree()
        node.label = get_label(child)
        print(node.label)
        nodes.append(node)
        if child.ul is not None:
            node.nodes = dfs(child)
    return nodes


if __name__ == "__main__":
    main()
