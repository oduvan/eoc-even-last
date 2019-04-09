from checkio_referee import RefereeRank, ENV_NAME



import settings_env
from tests import TESTS


class Referee(RefereeRank):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "even_last"
    FUNCTION_NAMES = {
        "python_3": "even_last",
        "js_node": "evenLast"
    }
    ENV_COVERCODE = {
        
    }