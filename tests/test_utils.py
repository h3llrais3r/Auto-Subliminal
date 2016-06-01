from autosubliminal.utils import getboolean


def test_getboolean():
    assert getboolean("1")
    assert getboolean("yes")
    assert getboolean("true")
    assert getboolean("on")
    assert not getboolean("0")
    assert not getboolean("no")
    assert not getboolean("false")
    assert not getboolean("off")
