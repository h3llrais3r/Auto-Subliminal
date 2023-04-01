# coding=utf-8

from typing import Any, Optional


def to_text(value: Any, default_value: Optional[str] = None) -> Optional[str]:
    """Convert any value to a text value before inserting it in the db.

    If the value is None, the default value will be returned.
    If the value is a list, convert it to a comma separated text value.
    If not, return the text representation of the object.
    """
    if value is not None:
        if isinstance(value, list):
            return ','.join(str(e) for e in value) if value else default_value
        else:
            return str(value)
    else:
        return default_value
